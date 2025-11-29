import React from 'react'
import myimg from "../../assets/myimg.jpeg"
const Herosection = () => {
    return (
        <section id="about" className="max-w-4xl mx-auto px-4 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <img
                    src={myimg}
                    alt="Profile"
                    className="w-full object-cover rounded-lg shadow"
                />
                <p className="text-lg font-medium leading-relaxed">
                    I am passionate about building modern and scalable Full Stack applications
                    using Node.js and React.
                </p>
            </div>
        </section>

    )
}

export default Herosection