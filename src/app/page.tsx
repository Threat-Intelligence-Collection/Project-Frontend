"use client";

export default function Home() {
  const handleLoginGithub = () => {
    const githubAuthUrl = "https://github.com/login/oauth/authorize";
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/oauth2/code/github`;
    const scope = "user";
    const state = "random_string";

    const url = `${githubAuthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scope}&state=${state}`;

    window.location.href = url;
  };

  const handleLoginGoogle = () => {
    const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/oauth2/code/google`;
    const scope = "openid email profile";
    const responseType = "code";

    const url = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scope}&response_type=${responseType}`;

    window.location.href = url;
  };
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded flex items-center transition-colors"
          id="github-login-button"
          onClick={handleLoginGithub}
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
          Login with GitHub
        </button>
      </div>
      <div>
        <button
          className="bg-black hover:bg-gray-600 text-white font-medium py-2 px-4 rounded flex items-center transition-colors"
          id="github-login-button"
          onClick={handleLoginGoogle}
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 533.5 544.3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4285F4"
              d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.4H272v95.3h147.4c-6.4 34-25.3 62.7-53.8 82.1v68h86.9c51-47 80-116.3 80-195z"
            />
            <path
              fill="#34A853"
              d="M272 544.3c72.6 0 133.5-24.1 178-65.3l-86.9-68c-24.1 16.2-55 25.9-91.1 25.9-70 0-129.3-47.2-150.5-110.3H32.9v69.2c44.6 88.1 136.2 148.5 239.1 148.5z"
            />
            <path
              fill="#FBBC05"
              d="M121.5 326.6c-10.4-30.5-10.4-63.4 0-93.9V163.5H32.9c-37.9 75.8-37.9 164.9 0 240.7l88.6-69.2z"
            />
            <path
              fill="#EA4335"
              d="M272 107.7c39.5-.6 77.3 13.9 106.2 40.6l79.4-79.4C411.4 25.7 344.7-.1 272 0 169.1 0 77.5 60.4 32.9 148.5l88.6 69.2c21.2-63.1 80.5-110.3 150.5-110z"
            />
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
}
