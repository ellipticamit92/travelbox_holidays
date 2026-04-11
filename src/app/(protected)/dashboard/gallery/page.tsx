"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface GalleryImage {
  id: string;
  imageUrl: string;
  name: string | null;
  destination: string | null;
  createdAt: string;
}

interface UploadFormValues {
  name: string;
  destination: string;
  file: FileList;
}

export default function GalleryManagerPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loadingImages, setLoadingImages] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<UploadFormValues>();

  const fileList = watch("file");

  useEffect(() => {
    if (fileList?.[0]) {
      const url = URL.createObjectURL(fileList[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreview(null);
    }
  }, [fileList]);

  async function fetchImages() {
    const res = await fetch("/api/gallery");
    const data = await res.json();
    setImages(data);
    setLoadingImages(false);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  async function onSubmit(data: UploadFormValues) {
    setUploadError(null);
    setUploadSuccess(false);
    setUploading(true);

    const formData = new FormData();
    formData.append("file", data.file[0]);
    if (data.name) formData.append("name", data.name);
    if (data.destination) formData.append("destination", data.destination);

    const res = await fetch("/api/gallery", { method: "POST", body: formData });

    setUploading(false);

    if (!res.ok) {
      const json = await res.json();
      setUploadError(json.error ?? "Upload failed");
      return;
    }

    setUploadSuccess(true);
    setPreview(null);
    reset();
    fetchImages();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this image?")) return;
    await fetch("/api/gallery", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Upload Form */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">
          Upload Gallery Image
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image Name{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="e.g. Sunset at Goa Beach"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination{" "}
                <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                {...register("destination")}
                type="text"
                placeholder="e.g. Goa, Kerala, Manali"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image File <span className="text-red-500">*</span>
            </label>
            <input
              {...register("file", { required: "Please select an image" })}
              type="file"
              accept="image/*"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {errors.file && (
              <p className="text-xs text-red-500 mt-1">{errors.file.message}</p>
            )}
          </div>

          {preview && (
            <div className="relative w-40 h-28 rounded-lg overflow-hidden border border-gray-200">
              <Image src={preview} alt="Preview" fill className="object-cover" />
            </div>
          )}

          {uploadError && (
            <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
              {uploadError}
            </p>
          )}
          {uploadSuccess && (
            <p className="text-sm text-green-700 bg-green-50 px-4 py-2 rounded-lg">
              Image uploaded successfully.
            </p>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Gallery ({images.length})
        </h2>

        {loadingImages ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : images.length === 0 ? (
          <p className="text-sm text-gray-500">No images uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={img.imageUrl}
                    alt={img.name ?? "Gallery image"}
                    fill
                    className="object-cover"
                  />
                </div>
                {(img.name || img.destination) && (
                  <div className="p-2">
                    {img.name && (
                      <p className="text-xs font-medium text-gray-800 truncate">
                        {img.name}
                      </p>
                    )}
                    {img.destination && (
                      <p className="text-xs text-gray-500 truncate">
                        {img.destination}
                      </p>
                    )}
                  </div>
                )}
                <button
                  onClick={() => handleDelete(img.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
