import backgroundImage from './assets/a plant image for a website background.png'; // Import the image

export default function Signup(){

    return(
        <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="w-screen text-black bg-cover bg-fixed h-screen bg-no-repeat flex flex-col justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-white p-8 rounded-lg shadow-md w-2/3 max-w-md">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-6 text-center border-2 rounded-md p-1">Sign Up</h2>
                
            </div>
            <form action="">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Name / ID</label>
                    <input type="text" id="name" className="w-full border rounded-md py-2 px-3 shadow " placeholder="Name"/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" className="w-full border rounded-md py-2 px-3 shadow " placeholder="Email"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                    <input type="password" id="password" className="w-full border rounded-md py-2 px-3 shadow " placeholder="password"/>
                </div>

                <div className="mb-4">
                    <label htmlFor="confirm-password" className="block text-sm font-bold text-gray-700 mb-2">Confirm-password</label>
                    <input type="password" id="confirm-password" className="w-full border rounded-md py-2 px-3 shadow " placeholder="confirm-password"/>
               </div>

                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign-up
                    </button>
                </div>

            </form>

        </div>
        </div>
        </div>
        </div>
    );

}