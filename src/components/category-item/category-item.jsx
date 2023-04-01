const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return (
        <div  className="min-w-[30%] h-60 flex-auto border grid place-items-center overflow-hidden relative">
            <img src={imageUrl} alt={title} className="absolute inset-0 object-cover w-full h-full -z-10" />
            <div className="bg-white/60 hover:bg-white/80 px-4 py-2 text-center cursor-pointer">
                <h2 className="font-semibold uppercase">{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    );
}

export default CategoryItem;