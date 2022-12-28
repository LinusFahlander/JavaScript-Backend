const users = [
    {id: 1, firstName: "Linus", lastName: "Fahlander", email: "fahlander.linus@gmail.com"},
]
module.exports = users

const products = [
    {tag: "featured", articleNumber: "9d9716f0-7170-43c5-82b1-697b509d29c5", name:"Black coat", description: "", category: "Coats", price: 79, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png"},
    {tag: "$29", articleNumber: "a28d3c0e-3862-435a-bc74-d603737e13f9", name:"Black dress", description: "", category: "Dresses", price: 29, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png"},
    {tag: "featured", articleNumber: "dbc0cefc-278b-4de5-9a76-d7897df8cecf", name:"Black top & pants set", description: "", category: "Sets", price: 54, rating: 3, imageName: ""},
    {tag: "$29", articleNumber: "58edef7b-b8ec-47a8-9964-7993f8b27ba1", name:"White top & black pants set", description: "", category: "Sets", price: 29, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png"},
    {tag: "featured", articleNumber: "05d9ff63-43d2-4ff7-9ab3-d99ee5a4063a", name:"Blue jacket", description: "", category: "Jackets", price: 89, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png"},
    {tag: "$29", articleNumber: "df7109c1-df78-49af-a2c7-8793509bcbcd", name:"Blue hoody & pants", description: "", category: "Sets", price: 29, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png"},
    {tag: "$29", articleNumber: "c450b437-856c-41b1-a165-fed144be042c", name:"Blue t-shirt", description: "", category: "T-Shirts", price: 29, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"},
    {tag: "featured", articleNumber: "29e4f371-8a43-40cc-a576-c01f32ed85d8", name:"Brown sweater", description: "", category: "Sweaters", price: 54, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png"},
    {tag: "$49", articleNumber: "eca04221-1928-4d25-a743-3b646ee47b0e", name:"Brown watch", description: "", category: "Watches", price: 49, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png"},
    {tag: "featured", articleNumber: "3d7af261-357d-441d-bec1-b108f8027920", name:"Stiletto shoes", description: "", category: "Shoes", price: 79, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png"},
    {tag: "$49", articleNumber: "b5ef64b7-0c97-4a80-84c8-7f94bb754fc4", name:"Gray t-shirt", description: "", category: "T-Shirts", price: 49, rating: 1, imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png"},
    {tag: "$49", articleNumber: "4ab10ae7-9d2a-4d2a-8aa4-900d427e113a", name:"Jeans dress", description: "", category: "Jeans", price: 49, rating: 0, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png"},
    {tag: "featured", articleNumber: "149a31ae-c0a4-4572-8eb4-3c25f9acf219", name:"Jeans jacket & pants", description: "", category: "Sets", price: 64, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png"},
    {tag: "$49", articleNumber: "3ed00196-fb05-4397-b53c-c8c4e54145d8", name:"Olive sweater", description: "", category: "Sweaters", price: 49, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png"},
    {tag: "featured", articleNumber: "a3251620-d6a2-4074-94a9-d84e7245fa18", name:"Multicolor t-shirt", description: "", category: "T-Shirts", price: 28, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png"},
    {tag: "", articleNumber: "38b259f5-345e-4ad1-be2e-35e755851c85", name:"Purple handbag", description: "", category: "Bags", price: 99, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png"},
    {tag: "featured", articleNumber: "ed9dcaf1-d7a4-44e0-91dc-f84389322ac4", name:"Red handbag", description: "", category: "Bags", price: 78, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png"},
    {tag: "", articleNumber: "4a03e5e8-ccaa-4063-8878-132654ac9d79", name:"Red dress", description: "", category: "Dresses", price: 24, rating: 2, imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png"},
    {tag: "", articleNumber: "88c6adbd-b7d3-4592-8b1a-f54286612820", name:"Striped top", description: "", category: "Tops", price: 5, rating: 1, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png"},
    {tag: "", articleNumber: "81371c1b-bd1d-4422-9ae6-94aa31d567b3", name:"Striped pink pants", description: "", category: "Pants", price: 29, rating: 5, imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png"},
    {tag: "", articleNumber: "673eefad-4fe1-4777-9388-e9d1ed565c74", name:"White sweater", description: "", category: "Sweaters", price: 44, rating: 4, imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png"},
    {tag: "", articleNumber: "c02d3f34-8092-4496-9f4b-743a149b2909", name:"Winter boots", description: "", category: "Shoes", price: 119, rating: 3, imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png"},
]
module.exports = products