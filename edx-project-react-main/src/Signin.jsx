import backgroundImage from './assets/a plant image for a website background.png'; // Import the image

export default function SignIn() {

    return (
        <div>

            <div  className="min-h-screen flex items-center justify-center bg-gray-300">
            <div className="w-screen text-black bg-cover bg-fixed h-screen bg-no-repeat flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-2/3 max-w-md border-2">
                <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-6 text-center border-2 rounded-md p-1">Sign in</h2>
                </div>
                
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ID">
                            ID number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ID"
                            type="text"
                            placeholder="ID number"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
            </div>
            </div>
            </div>
        
    );
}