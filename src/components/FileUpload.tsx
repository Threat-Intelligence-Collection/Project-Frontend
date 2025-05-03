// components/FileUpload.tsx
import { Upload } from "lucide-react";

const FileUpload: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col items-center space-y-8 w-[90%] max-w-xl">
        <div className="bg-red-100 p-4 rounded-full">
          <Upload className="w-16 h-16 text-red-700" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Upload Your File</h1>
        <hr className="w-full border-t-2 border-red-700 shadow-sm" />
        <label className="bg-red-700 text-white font-semibold py-3 px-8 rounded-lg cursor-pointer hover:bg-red-600 transition duration-300 shadow-md">
          Choose File
          <input type="file" className="hidden" />
        </label>
        <p className="text-sm text-gray-500">Supported formats: ..........</p>
      </div>
    </div>
  );
};

export default FileUpload;
