const TRIP_DATA = [
    {
        id: 1,
        videourl:"https://a0.muscache.com/v/8d/d7/8dd7dca7-2952-5de6-9b4b-14750223a62b/8dd7dca729525de69b4b14750223a62b_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.98 (129)',
        subtext: 'United States',
        title: 'Plan the Perfect New York City Vaction',
        price:'From ¢20/person'
        
    },
    {
        id: 2,
        videourl:"https://a0.muscache.com/v/1b/23/1b23cf49-a59c-5f17-9ac6-d7b50a0536da/1b23cf49a59c5f179ac6d7b50a0536da_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (16)',
        subtext: 'Spain',
        title: 'Design your trip to barcelona with Gemma',
        price:'From ¢32/person'
        
    },
    {
        id: 3,
        videourl:"https://a0.muscache.com/v/a9/a9/a9a9f68a-f73a-5917-b046-c722c644e41c/a9a9f68af73a5917b046c722c644e41c_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (32)',
        subtext: 'South Korea',
        title: 'Craft a custom trip to Korea with Jay',
        price:'From ¢24/person'
        
    },
    {
        id: 4,
        videourl:"https://a0.muscache.com/v/04/d3/04d3e732-733d-53c2-8176-a9ab6f875426/04d3e732733d53c28176a9ab6f875426_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.80 (5)',
        subtext: 'Mexico',
        title: 'Explore Tulum like a local',
        price:'From ¢27/person'
        
    },
    {
        id: 5,
        imageurl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-3033220-media_library/original/eb40951a-ab06-429a-bb75-9410d14efdff.jpeg?im_w=480",
        subtitle: '5.0 (4)',
        subtext: 'United States',
        title: 'Discover Sunny Fort Lauderdale',
        price:'From ¢29/person'
        
    },
    {
        id: 6,
        videourl:"https://a0.muscache.com/v/ff/8f/ff8fec7b-c23a-542b-b102-c474e9481b6d/ff8fec7bc23a542bb102c474e9481b6d_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.91 (11)',
        subtext: 'United States',
        title: 'Plan a trip to amazing Austin',
        price:'From ¢19/person'
        
    },
    {
        id: 7,
        videourl:"https://a0.muscache.com/im/pictures/lombard/MtTemplate-2762870-active_media/original/0a96d461-c638-4a07-8cb5-76bb0720be1c.jpg?im_w=480",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (16)',
        subtext: 'United States',
        title: 'Plan a Trip to Orlando, Florida & Theme Parks',
        price:'From ¢9/person'
        
    },
    {
        id: 8,
        videourl:"https://a0.muscache.com/v/d9/0c/d90c9ab1-e29b-59c6-b43b-97aee9c0e6b5/d90c9ab1e29b59c6b43b97aee9c0e6b5_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (14)',
        subtext: 'United States',
        title: 'Plan The Perfect Barcelona Vacation',
        price:'From ¢41/person'
        
    },
    {
        id: 9,
        videourl:"https://a0.muscache.com/v/9d/75/9d75e57e-dd86-5c9c-9b63-e010d51a29bf/9d75e57edd865c9c9b63e010d51a29bf_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.89 (37)',
        subtext: 'Italy',
        title: 'Create your Rome itinerary with Debora',
        price:'From ¢4/person'
        
    },
    {
        id: 10,
        videourl:"https://a0.muscache.com/v/3f/55/3f554e86-7307-54c0-94a7-ea7b0cbe8cde/3f554e86730754c094a7ea7b0cbe8cde_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (14)',
        subtext: 'Italy',
        title: 'Plan a Venice venture with Giulia',
        price:'From ¢17/person'
        
    },
    {
        id: 11,
        videourl:"https://a0.muscache.com/v/f6/08/f6082463-56f7-58a6-aac8-648e70784131/f608246356f758a6aac8648e70784131_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.97 (30)',
        subtext: 'Thailand',
        title: 'Organize a Thailand trip with Buay',
        price:'From ¢6/person'
        
    },
    {
        id: 12,
        videourl:"https://a0.muscache.com/v/53/6f/536f83e9-2951-5c66-94a2-5d97a061b2d6/536f83e929515c6694a25d97a061b2d6_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '4.98 (40)',
        subtext: 'United States',
        title: 'Plan A Trip To Nashville With a Local insider',
        price:'From ¢28/person'
        
    },
    {
        id: 13,
        videourl:"https://a0.muscache.com/v/be/de/bede39aa-cd15-5025-bdb4-82e869e8fc67/bede39aacd155025bdb482e869e8fc67_4000k_1.mp4",
        imageUrl:'https://cdn.imgbin.com/13/13/10/imgbin-red-star-kt9kVpXt4erXWYTZaE6d2aD3N.jpg',
        subtitle: '5.0 (4)',
        subtext: 'United States',
        title: 'Plan the perfect trip to sunny Miami',
        price:'From ¢19/person'
        
    },
];

export default TRIP_DATA;