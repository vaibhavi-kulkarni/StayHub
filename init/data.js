const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description:
            "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1500,
        location: "Malibu",
        country: "United States",
    },
    {
        title: "Modern Loft in Downtown",
        description:
            "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1200,
        location: "New York City",
        country: "United States",
    },
    {
        title: "Mountain Retreat",
        description:
            "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 1000,
        location: "Aspen",
        country: "United States",
    },
    {
        title: "Historic Villa in Tuscany",
        description:
            "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 2500,
        location: "Florence",
        country: "Italy",
    },
    {
        title: "Secluded Treehouse Getaway",
        description:
            "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 800,
        location: "Portland",
        country: "United States",
    },
    {
        title: "Beachfront Paradise",
        description:
            "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2000,
        location: "Cancun",
        country: "Mexico",
    },
    {
        title: "Rustic Cabin by the Lake",
        description:
            "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
    },
    {
        title: "Luxury Penthouse with City Views",
        description:
            "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 3500,
        location: "Los Angeles",
        country: "United States",
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description:
            "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
    },
    {
        title: "Safari Lodge in the Serengeti",
        description:
            "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
    },
    {
        title: "Historic Canal House",
        description:
            "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
    },
    {
        title: "Private Island Retreat",
        description:
            "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 10000,
        location: "Fiji",
        country: "Fiji",
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description:
            "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
    },
    {
        title: "Luxury Yacht Charter",
        description:
            "Sail the seas in style with this luxury yacht charter. A perfect way to explore the Mediterranean.",
        image: "https://images.unsplash.com/photo-1601582581525-4ec84abf66f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3dpbW1pbmdwb29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 15000,
        location: "Monaco",
        country: "Monaco",
    },
    {
        title: "Tropical Bungalow",
        description:
            "Relax in this tropical bungalow surrounded by lush greenery and vibrant wildlife. Perfect for a peaceful retreat.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1300,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Desert Oasis Villa",
        description:
            "Find tranquility in this stunning desert villa. An oasis of calm and luxury in the arid landscape.",
        image: "https://images.unsplash.com/photo-1613946069395-8d0661fcf760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFjYXRpb25zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 2200,
        location: "Dubai",
        country: "United Arab Emirates",
    },
    {
        title: "Bohemian Apartment",
        description:
            "Experience the artistic vibe of this bohemian apartment, located in the heart of the city's cultural district.",
        image: "https://images.unsplash.com/photo-1596023712972-5e01f5699c1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1400,
        location: "Berlin",
        country: "Germany",
    },
    {
        title: "Countryside Farmhouse",
        description:
            "Reconnect with nature in this charming countryside farmhouse. Perfect for a family vacation or a peaceful retreat.",
        image: "https://images.unsplash.com/photo-1590359927132-97c3e1b2fa80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1600,
        location: "Provence",
        country: "France",
    },
    {
        title: "Countryside Farmhouse",
        description:
            "Reconnect with nature in this charming countryside farmhouse. Perfect for a family vacation or a peaceful retreat.",
        image: "https://images.unsplash.com/photo-1590359927132-97c3e1b2fa80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1600,
        location: "Provence",
        country: "France",
    },
    {
        title: "Mediterranean Villa",
        description:
            "Enjoy a luxurious stay in this Mediterranean villa with stunning sea views and private pool.",
        image: "https://images.unsplash.com/photo-1582719478178-9f5a709e8d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 3000,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Cozy Cabin in the Woods",
        description:
            "Escape to this cozy cabin nestled in the woods. Perfect for a tranquil getaway.",
        image: "https://images.unsplash.com/photo-1552039454-7b2909416f63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 700,
        location: "Smoky Mountains",
        country: "United States",
    },
    {
        title: "Elegant Parisian Apartment",
        description:
            "Stay in an elegant apartment in the heart of Paris, with beautiful views of the city.",
        image: "https://images.unsplash.com/photo-1542318939-6b706c61f235?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFyaXMlMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 2700,
        location: "Paris",
        country: "France",
    },
    {
        title: "Urban Studio Apartment",
        description:
            "Modern and chic studio apartment located in the vibrant downtown area.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXJiYW4lMjBhcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1000,
        location: "San Francisco",
        country: "United States",
    },
    {
        title: "Lakeside Lodge",
        description:
            "Enjoy serene lake views from this comfortable lodge. Ideal for fishing and boating.",
        image: "https://images.unsplash.com/photo-1507089972849-3a15f6b12f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1300,
        location: "Lake District",
        country: "United Kingdom",
    },
    {
        title: "Tropical Hideaway",
        description:
            "A hidden gem in the tropics, perfect for a secluded and peaceful retreat.",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 1800,
        location: "Phuket",
        country: "Thailand",
    },
    {
        title: "Seaside Villa",
        description:
            "Relax in this beautiful villa by the sea, with private beach access and stunning views.",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 2200,
        location: "Maui",
        country: "United States",
    },
    {
        title: "Mountain Chalet",
        description:
            "Stay in this cozy mountain chalet with breathtaking views and modern amenities.",
        image: "https://images.unsplash.com/photo-1502791451862-5a2a9c89c6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBjaGFsb3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        price: 2400,
        location: "Rocky Mountains",
        country: "United States",
    },
    {
        title: "Luxury Estate",
        description:
            "Experience opulence in this grand estate with sprawling gardens and top-notch facilities.",
        image: "https://images.unsplash.com/photo-1520262494112-b87c24f1188f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwZXN0YXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 5000,
        location: "Beverly Hills",
        country: "United States",
    },
    {
        title: "Scenic Lakehouse",
        description:
            "Spend your holiday in this scenic lakehouse with stunning views and plenty of outdoor activities.",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFrZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 1500,
        location: "Finger Lakes",
        country: "United States",
    },
    {
        title: "Historic Townhouse",
        description:
            "Stay in a beautifully restored historic townhouse in the heart of the city, with easy access to landmarks and attractions.",
        image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bmhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        price: 1900,
        location: "Charleston",
        country: "United States",
    },
    {
        title: "Vineyard Cottage",
        description:
            "Enjoy a serene stay at this cottage located in a picturesque vineyard, with wine tasting and tours available.",
        image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmluZXlhcmQlMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        price: 1700,
        location: "Napa Valley",
        country: "United States",
    },
];
  
  
module.exports = { data: sampleListings };