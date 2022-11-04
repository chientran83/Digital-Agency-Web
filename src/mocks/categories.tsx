interface Categories {
    title: String,
    children?: Categories[]
}

interface CategoriesData{
    status : Number;
    data : Categories[]
}

const categories : CategoriesData = {
    status : 200,
    data : [
        {
            title : "Digital Agency",
            children : [
                {
                    title : "Building digital products, brands & experience"
                }
            ]
        },
        {
            title : "Resources",
            children : [
                {
                    title : "Guides"
                },
                {
                    title : "Blog"
                },
                {
                    title : "Cuistomer Stories"
                },
                {
                    title : "Glossery"
                },
            ]
        },
        {
            title : "Company",
            children : [
                {
                    title : "About Us"
                },
                {
                    title : "Careers"
                },
                {
                    title : "Partners"
                },
                {
                    title : "contact Us"
                },
            ]
        },
        {
            title : "Social Media",
            children : [
                {
                    title : "Linkeln"
                },
                {
                    title : "Facebook"
                },
                {
                    title : "Instagram"
                },
                {
                    title : "Twitter"
                },
            ]
        },
    ]
}

export default categories;