import Tooltip from "@/components/Tooltip/Tooltip";


const AboutPage = () => {
    return (
        <div className=" h-screen w-full flex  justify-center items-center " >

            <div className=" h-screen w-full flex  justify-center items-center " >

                <Tooltip
                    content="This tooltip appears at the bottom"
                    position="bottom"
                >
                    <button className="px-4 py-2 bg-green-600 text-white rounded">
                        Bottom Tooltip
                    </button>
                </Tooltip>

            </div>
        </div>
    )
};






export default AboutPage
