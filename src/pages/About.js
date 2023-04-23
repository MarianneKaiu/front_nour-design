import React from "react";
import Header from "../components/Header";
import image from "../assets/img/v991-au-033.jpg";
const About = () => {
    return (
        <>
            <Header />
            <main className="about_main-container">
                <h1>A PROPOS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, recusandae neque eligendi adipisci excepturi, itaque
                    amet delectus soluta maiores a error reiciendis temporibus
                    dolore nisi dolorem porro dolores molestias rem rerum,
                    accusamus ducimus laboriosam consectetur saepe perferendis.
                    Reprehenderit error saepe autem vel doloribus omnis dolorem?
                    Quod aliquam iure laudantium nobis.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aut saepe, recusandae voluptatibus excepturi pariatur
                    incidunt voluptatum quibusdam quos, minima voluptatem unde
                    expedita, ipsa fuga quidem rem. Odit nulla suscipit hic
                    maxime quisquam corporis inventore vitae repudiandae
                    expedita quis ut, quae perspiciatis nisi similique impedit
                    in, animi a molestiae harum ullam aperiam! Eligendi at autem
                    eum cupiditate iure. Eaque qui sequi sit, eum non neque nam
                    dicta veritatis ipsa ad eos aliquam adipisci expedita,
                    cumque ipsam consequuntur voluptatibus! Delectus ad, amet
                    laborum officia nesciunt atque? Aliquid animi ad eaque quia
                    quod dolorem reprehenderit cum blanditiis in. Unde debitis
                    perspiciatis distinctio? Ea rerum iusto dolores. Labore,
                    natus! Expedita mollitia iste magnam.
                </p>
            </main>
            <div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-x",
                    backgroundPosition: "bottom 0",
                    height: 320,
                }}
                className="about_bg-container"
            >
                <p>
                    <a href="https://www.freepik.com/free-vector/environment-doodle-vector-renewable-energy-concept_17224308.htm#query=recycling&position=14&from_view=search&track=sph">
                        Image by rawpixel.com
                    </a>{" "}
                    on Freepik
                </p>
            </div>
        </>
    );
};

export default About;
