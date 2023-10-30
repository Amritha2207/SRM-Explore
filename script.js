// Sample data for building information
const buildings = [
    {
        name: "CRC Block",
        image: "crc.png",
        description: "Home to dynamic programs for intial years of Mechanical Engineering, Computer Science, and Data Science Specialization, here's where your journey begins.",
        location: "https://www.google.com/maps/place/CRC+Block,+Srm+University/@12.8203334,80.0352723,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76c8b95a6f7:0x3d59e2e9bcccb4d7!8m2!3d12.8203334!4d80.0378472!16s%2Fg%2F11cp5qtyfc?entry=ttu"
    },
    {
        name: "Hi Tech Block",
        image: "hitech1.png",
        description: "The Hi-Tech hosts diverse range of departments, from 2nd-year Mechanical and Civil Engineering to MSC, EIE, and Automobile Engineering across all four years.",
        location: "https://www.google.com/maps/place/SRM+Hitech+Block/@12.8210424,80.038931,17z/data=!3m2!4b1!5s0x3a52f76ce513963d:0x2284a6439f619f60!4m6!3m5!1s0x3a52f76ce9323d11:0x8a58b4c6ff987b6b!8m2!3d12.8210424!4d80.038931!16s%2Fg%2F1hjhhl8xh?entry=ttu"
    },
    {
        name: "Automobile Hanger",
        image: "automobile hanger.png",
        description: "Step into the world of automotive engineering excellence at our state-of-the-art Automobile Lab in the Automobile Hanger. Here, innovation takes the driver's seat as students delve into hands-on learning.",
        location: "https://www.google.com/maps/place/Automobile+Hanger/@12.8202693,80.0399615,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f79c9cc212a3:0x8bb5e446234b5d02!8m2!3d12.8202693!4d80.0399615!16s%2Fg%2F11fl8py8j6?entry=ttu"
    },
    {
        name: "ESB Block",
        image: "esb.png",
        description: "Home to the EEE Department and the Faraday Hall(2nd floor).Step into a world of electrifying discoveries and advancements,where students and faculty collaborate to power the future with groundbreaking electrical and electronic solutions.",
        location: "https://www.google.com/maps/place/SRM+ESB+BLOCK/@12.8199211,80.0391558,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76c56a1c09f:0x22c1fbef64fc69b4!8m2!3d12.8199211!4d80.0391558!16s%2Fg%2F11f123thxm?entry=ttu"
    },
    {
        name: "Mechanical Block A",
        image: "mech block a.png",
        description: "Explore the heart of engineering excellence at Mechanical Block A. Housing the Mechanical and Chemical Departments, along with the prestigious GD Naidu Hall, it's a hub of innovation where mechanical and chemical sciences unite.",
        location: "https://www.google.com/maps/place/Mechanical+A+Block/@12.820913,80.0371773,17z/data=!4m10!1m2!2m1!1sMechanical+Block+A+srm!3m6!1s0x3a52f76ce2d4aedd:0x63d3d41517b93aa2!8m2!3d12.820913!4d80.039366!15sChZNZWNoYW5pY2FsIEJsb2NrIEEgc3JtkgEHY29sbGVnZeABAA!16s%2Fg%2F11c31xkxlt?entry=ttu"
    },
    {
        name: "Civil Block",
        image: "civil block.png",
        description: "Home to the Civil Department. Here, we lay the foundation for a sustainable future, one brick at a time.Join us in shaping the world with innovative civil engineering solutions and a commitment to building a better tomorrow.",
        location: "https://www.google.com/maps/place/CRC+Block,+Srm+University/@12.8203334,80.0334698,16z/data=!4m10!1m2!2m1!1sCivil+Block+srm!3m6!1s0x3a52f76c8b95a6f7:0x3d59e2e9bcccb4d7!8m2!3d12.8203334!4d80.0378472!15sCg9DaXZpbCBCbG9jayBzcm0iA4gBAZIBEnByaXZhdGVfdW5pdmVyc2l0eeABAA!16s%2Fg%2F11cp5qtyfc?entry=ttu"
    },
    {
        name: "Aerospace Hanger",
        image: "aerospace hanger.png",
        description: "Embark on a journey through the Aerospace Hanger, where the skies are not the limit but the beginning. Our Aerospace Engineering Department soars to new heights, nurturing the dream of flight and the exploration of the heavens.",
        location: "https://www.google.com/maps/place/Department+Of+Aerospace+Engineering/@12.8201412,80.0401318,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52f76da83d5eab:0x199544a3ad2dc45e!8m2!3d12.8201412!4d80.0401318!16s%2Fg%2F1hjgz3gmw?entry=ttu"
    },

    {
        name: "Mechanical Hanger",
        image: "mech hanger.png",
        description: "Step into the world of mechanical excellence at the Mechanical Hanger.From developing efficient engines and sustainable energy solutions to designing sophisticated manufacturing processes takes place here.",
        location: "https://www.google.com/maps/place/Mechanical+Hangar/@12.8205893,80.039982,17z/data=!4m10!1m2!2m1!1s+Mechanical+Hanger+srm!3m6!1s0x3a52f76d061eb371:0x614685f3dc6c2226!8m2!3d12.8205171!4d80.0401979!15sChVNZWNoYW5pY2FsIEhhbmdlciBzcm0iA4gBAZIBBnNjaG9vbOABAA!16s%2Fg%2F11bwq94l_c?entry=ttu"
    }
    // Add more building data as needed
];

// Function to create building cards
function createBuildingCard(building) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = building.image;
    card.appendChild(image);

    const description = document.createElement("p");
    description.textContent = building.description;
    card.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Open in Google Maps";
    button.addEventListener("click", () => {
        window.open(building.location, "_blank");
    });
    card.appendChild(button);

    return card;
}

// Populate the container with building cards
const container = document.querySelector(".container");
buildings.forEach((building) => {
    const card = createBuildingCard(building);
    container.appendChild(card);
});