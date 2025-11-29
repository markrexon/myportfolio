import { IoStar } from 'react-icons/io5'

const Skills = () => {
    const genstar = (count) => {
        const counter = []
        for (let i = 0; i < count; i++) {
            counter.push(i)
        }
        return <span className='flex justify-start space-x-2'>{counter.map(x => (<IoStar size={10} />))}</span>
    }

    const skilljson = [
        { id: 1, name: "React", experience: "2Y", rating: 4 },
        { id: 2, name: "Tailwindcss", experience: "2Y", rating: 4 },
        { id: 3, name: "Nodejs", experience: "2Y", rating: 4 }
        , { id: 4, name: "Python", experience: "2Y", rating: 4 }
        , { id: 5, name: "Fastify", experience: "2Y ", rating: 4 }
        , { id: 5, name: "Postgres", experience: "2Y ", rating: 4 }


    ]
    return (
        <div id='skills' className='my-2'>
            <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
            <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-2">
                {skilljson?.map(x => (
                    <div key={x.id} className="bg-white text-center rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-lg transition-shadow">
                        <h2 className="text-lg font-semibold text-gray-800">{x.name}</h2>
                        <div className="flex flex-col space-y-4 mt-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm">Rating</span>
                                <div className="flex gap-1">{genstar(x.rating)}</div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm">Experience</span>
                                <span className="font-medium text-sm text-gray-700">{x.experience}</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Skills