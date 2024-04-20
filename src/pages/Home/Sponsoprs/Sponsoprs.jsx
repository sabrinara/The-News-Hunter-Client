
import Marquee from 'react-fast-marquee';

const Sponsors = () => {
    const sponsors = [
        {
            id: 1,
            name: 'Sponsor 1',
            image: 'https://i.ibb.co/M5N4NRx/1.png'
        },
        {
            id: 2,
            name: 'Sponsor 2',
            image: 'https://i.ibb.co/hWdYrfK/2.png'
        },
        {
            id: 3,
            name: 'Sponsor 3',
            image: 'https://i.ibb.co/MGcp2wV/3.png'
        },
        {
            id: 4,
            name: 'Sponsor 4',
            image: 'https://i.ibb.co/k9d6Zms/4.png'
        },
        {
            id: 5,
            name: 'Sponsor 5',
            image: 'https://i.ibb.co/MfVRkVv/5.png'
        },
        {
            id: 6,
            name: 'Sponsor 6',
            image: 'https://i.ibb.co/b5hkbyc/6.png'
        },
        {
            id: 7,
            name: 'Sponsor 7',
            image: 'https://i.ibb.co/rfR31Q3/7.png'
        },
        {
            id: 8,
            name: 'Sponsor 8',
            image: 'https://i.ibb.co/W6JKz3S/8.png'
        },
        {
            id: 9,
            name: 'Sponsor 9',
            image: 'https://i.ibb.co/jhJ2MtC/9.png'
        },
        {
            id: 10,
            name: 'Sponsor 10',
            image: 'https://i.ibb.co/L0MbmM0/10.png'
        },
        {
            id: 11,
            name: 'Sponsor 11',
            image: 'https://i.ibb.co/WsDJzHR/11.png'
        },
        {
            id: 12,
            name: 'Sponsor 12',
            image: 'https://i.ibb.co/yRXk3b1/12.png'
        }
    ];

    return (
        <div>
            <h1 className="text-5xl font-extrabold text-sky-600 text-center my-14">Our Sponsors</h1>
            <Marquee className="flex flex-col items-center " gradient={false} speed={200}>
              
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="w-60 mx-2">
                            <div className="w-60 bg-gradient-to-r from-sky-300 via-sky-200 to-sky-500 text-center shadow-xl rounded">
                                <figure className="px-12 py-20">
                                    <img className="rounded-xl h-28" src={sponsor.image} alt={sponsor.name} />
                                </figure>
                            </div>
                        </div>
                    ))}
                
            </Marquee>
        </div>
    );
};

export default Sponsors;
