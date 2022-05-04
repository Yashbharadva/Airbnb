const WEEKEND_DATA = [
    {
        id: 1,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2038668-media_library/original/187cf174-8859-4bcc-bd8b-4960ad1298c1.jpeg?im_w=480",
        subtitle: '4.96(704)',
        subtext: 'Japan',
        title: 'Healing Concert',
        price:'From ¢6/person'
        
    },
    {
        id: 2,
        videourl:"https://a0.muscache.com/v/63/7d/637d050d-80dd-5d6a-afbc-41f0138f0292/637d050d80dd5d6aafbc41f0138f0292_4000k_1.mp4",
        subtitle: '4.92(3,226)',
        subtext: 'Czech Republic',
        title: 'Follow a Plague Doctor Through Prague',
        price:'From ¢27/person'
        
    },
    {
        id: 3,
        videourl:"https://a0.muscache.com/v/a3/25/a325262c-0198-541d-a7eb-2c3440e67e5d/a325262c0198541da7eb2c3440e67e5d_4000k_1.mp4",
        subtitle: '4.98(2,976)',
        subtext: 'Italy',
        title: 'Pasta with the Grandmas',
        price:'From ¢14/person'
        
    },
    {
        id: 4,
        videourl:"https://a0.muscache.com/v/bd/78/bd7895bc-7dc9-5908-8131-89bd9aaa0777/bd7895bc7dc95908813189bd9aaa0777_4000k_1.mp4",
        subtitle: '4.98(766)',
        subtext: 'Portugal',
        title: 'Astrology Workshop, BirthChart Reading',
        price:'From ¢47/person'
        
    },
    {
        id: 5,
        imageurl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2623788-media_library/original/02da0f94-2289-42d9-b128-1c61f3354e4b.jpeg?im_w=480",
        subtitle: '4.99(182)',
        subtext: 'Portugal',
        title: 'Numerology, Soul Desire & Oracle Reading',
        price:'From ¢40/person'
        
    },
    {
        id: 6,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654801-media_library/original/1ad97a42-0606-4401-a631-aa88b6acdd77.jpeg?im_w=480",
        subtitle: '4.94(1,876)',
        subtext: 'Japan',
        title: 'Meditattion with a Japanese Buddhist Monk',
        price:'From ¢11/person'
        
    },
    {
        id: 7,
        videourl:"https://a0.muscache.com/v/a7/40/a7400fb1-8a61-587f-a05d-66ec41400ef9/a7400fb18a61587fa05d66ec41400ef9_4000k_1.mp4",
        subtitle: '4.98(4,024)',
        subtext: 'Mexico',
        title: 'Make Mexico dtreet Tacos with a Pro Chef',
        price:'From ¢20/person'
        
    },
    {
        id: 8,
        videourl:"https://a0.muscache.com/v/7b/60/7b6002b3-f21c-53c5-9a9b-29abec48e876/7b6002b3f21c53c59a9b29abec48e876_4000k_1.mp4",
        subtitle: '4.98(723)',
        subtext: 'United Arab Emirates',
        title: 'Tarot Reading and Meditation Spiritual guidance/couseling',
        price:'From ¢47/person'
        
    },
    {
        id: 9,
        videourl:"https://a0.muscache.com/v/35/bd/35bdc143-1e34-5b84-9937-e8bc5b328d2a/35bdc1431e345b849937e8bc5b328d2a_4000k_1.mp4",
        subtitle: '4.90(2,434)',
        subtext: 'United States',
        title: 'Living Room Legends Scavenger Hunt',
        price:'From ¢13/person'
        
    },
    {
        id: 10,
        videourl:"https://a0.muscache.com/v/b3/7f/b37f5e1a-b297-5b25-9c42-07a69866e82a/b37f5e1ab2975b259c4207a69866e82a_4000k_1.mp4",
        subtitle: '4.94(513)',
        subtext: 'Portugal',
        title: 'Fall in Laugh',
        price:'From ¢13/person'
        
    },
    {
        id: 11,
        videourl:"https://a0.muscache.com/v/92/e1/92e1c75f-2d8b-5fcf-b4ac-62ed1afe6835/92e1c75f2d8b5fcfb4ac62ed1afe6835_4000k_1.mp4",
        subtitle: '4.96(100)',
        subtext: 'Indonesia',
        title: 'Lost in Space Escape Room Game',
        price:'From ¢15/person'
        
    },
    {
        id: 12,
        videourl:"https://a0.muscache.com/v/10/02/1002ffa8-3745-5314-a557-cda9e0891592/1002ffa837455314a557cda9e0891592_4000k_1.mp4",
        subtitle: '4.98(874)',
        subtext: 'United States',
        title: 'Drawn from Within with a New York Artist',
        price:'From ¢20/person'
        
    },
    {
        id: 13,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1496170-media_library/original/1c80a653-f0d9-4ad3-a078-09445877f5c4.jpeg?im_w=480",
        subtitle: '4.94(316)',
        subtext: 'Canada',
        title: 'Intuitive Tarot Reading and Meditation',
        price:'From ¢70/person'
        
    },
    {
        id: 14,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1827402-active_media/original/109175cd-581c-4ab3-bb17-a865d2b4352d.jpg?im_w=480",
        subtitle: '4.92(927)',
        subtext: 'Indonesia',
        title: 'Haunted Mansion Escape Room Mystery Game',
        price:'From ¢16/person'
        
    },
    {
        id: 15,
        videourl:"https://a0.muscache.com/v/72/a6/72a64657-239f-5eca-88d6-6ff83622be1d/72a64657239f5eca88d66ff83622be1d_4000k_1.mp4",
        subtitle: '4.97(1,257)',
        subtext: 'Spain',
        title: 'Paella & Sangria with a Top Chef Graet for Team Building',
        price:'From ¢26/person'
        
    },
    {
        id: 16,
        videourl:"https://a0.muscache.com/v/5c/c1/5cc1d15f-403f-5a79-ae0d-abb19b91818f/5cc1d15f403f5a79ae0dabb19b91818f_4000k_1.mp4",
        subtitle: '4.97(1,160)',
        subtext: 'Mexico',
        title: 'Mezcal & Tequilla Cocktail Masterclass',
        price:'From ¢24/person'
        
    },
    {
        id: 17,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2583159-media_library/original/13fc32fe-5cf4-4cef-b97f-d0cb53098a4e.jpeg?im_w=480",
        subtitle: '5.0(219)',
        subtext: 'India',
        title: 'Chai Tea Masterclass-(VEGAN Friendly)',
        price:'From ¢11/person'
        
    },
    {
        id: 18,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1679851-media_library/original/193f8bd7-088f-4b16-90a3-0e28218e446c.jpeg?im_w=480",
        subtitle: '4.99(716)',
        subtext: 'India',
        title: 'Interactive indian cooking class with us',
        price:'From ¢20/person'
        
    },
    {
        id: 19,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3033220-media_library/original/5f7f9363-bbd9-4503-8bcf-ac0671eb34e1.jpg?im_w=480",
        subtitle: '5.0(4)',
        subtext: 'United States',
        title: 'Discover Sunny Fort Lauderdale',
        price:'From ¢19/person'
        
    },
    {
        id: 20,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-1727813-poster/original/9a0f37fa-4ce4-4102-8fdf-a701559e62d4.jpeg?im_w=480",
        subtitle: '4.96(418)',
        subtext: 'India',
        title: 'Tajmahal Virtual Tour with Local Expert',
        price:'From ¢3/person'
        
    },
];

export default WEEKEND_DATA;