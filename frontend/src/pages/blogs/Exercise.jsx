import React from "react";
import bgBlog from "../icons/blogbg.jpg";
import Zoom from "react-reveal/Zoom";
import Footer from "../Footer";

function Exercise() {
    return (
        <>
        <div className="container mx-auto mt-40 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgBlog})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Zoom>
                <div className="max-w-4xl flex gap-12 border-4 mt-12 rounded border-purple-700 hover:scale-110">
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold">
                        Regular exercise offers numerous physical and mental health benefits that contribute to overall well-being. From a physical standpoint, engaging in regular exercise helps to improve cardiovascular health by strengthening the heart and improving circulation. It also aids in weight management by burning calories and increasing metabolism. Additionally, exercise promotes muscle strength and endurance, enhancing overall physical performance and reducing the risk of injuries. </p>
                    </div>
                    <div className="w-1/2">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="max-w-4xl flex gap-12 mt-12 border-4 rounded border-purple-700 hover:scale-110">

                    <div className="w-1/2">
                        <img
                            src="https://thumbs.dreamstime.com/b/fit-family-doing-stretching-exercise-full-length-portrait-against-white-background-46846556.jpg"
                            alt="Large Image"
                            className="w-full h-auto bg-purple-500"
                        />
                    </div>
                    <div className="w-1/2 p-6 my-18 border border-gray-400 bg-purple-500 ">
                        <p className="text-lg leading-relaxed text-white font-bold ">
                        In summary, incorporating regular exercise into one's lifestyle is essential for maintaining optimal physical and mental health. The benefits extend far beyond just physical fitness, encompassing improved cardiovascular health, weight management, muscle strength, mental clarity, and emotional well-being. Whether it's through aerobic activities, strength training, yoga, or sports participation, finding enjoyable ways to stay active is key to leading a healthy and fulfilling life.</p>
                    </div>
                </div>
            </Zoom>
        </div>
        <Footer/>
        </>
    );
}

export default Exercise;