const TitleCard = (props) => {
    const {title} = props;
    return(
        <div className="title-card text-white text-xl font-semibold px-4 py-2">
        <p>{title}</p>
      </div>
    )
}

export default TitleCard