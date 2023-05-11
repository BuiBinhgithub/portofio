
const Contact = () => {

    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="https://getform.io/f/309d5d60-5cd5-4055-be85-e6b9af3c0586" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-[#FD81A6]">Contact</p>
                    <p className="text-gray-300 py-5">Submit the form below or you can send me an email - ducbinh24299@gmail.com.</p>
                </div>
                <input minLength="5" required className="my-4 p-2 bg-[#ccd6f6] rounded-md" type="text" placeholder="Name..." name="name" />
                <input minLength="5" required className="my-4 p-2 bg-[#ccd6f6] rounded-md" type="email" placeholder="Email..." name="email" />
                <textarea minLength="5" required name="message" id="" cols={30} rows={10} className="my-4 p-2 bg-[#ccd6f6] rounded-md" placeholder="Message..." />
                <button className="text-white border-2 hover:bg-[#FD81A6] max-w-[200px] px-4 py-3 mx-auto hover:duration-150 hover:border-[#FD81A6]">Let's collaborate</button>
            </form>
        </div>
    );
}

export default Contact; 