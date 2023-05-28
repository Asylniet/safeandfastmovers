const services = [
    {
        id: 1,
        title: "Child Care",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-1.jpg",
    },
    {
        id: 2,
        title: "Personal Care",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-2.jpg",
    },
    {
        id: 3,
        title: "CT Scan",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-3.jpg",
    },
    {
        id: 4,
        title: "Joint Replacement",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-4.jpg",
    },
    {
        id: 5,
        title: "Examination & Diagnosis",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-8.jpg",
    },
    {
        id: 6,
        title: "Alzheimer's disease",
        descr: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
        img: "/service/service-6.jpg",
    },
]

export async function getServices() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(services);
        }, 1000);
    })
}