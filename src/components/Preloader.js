const Preloader = () => {

    const preloaderHandler = (e)=>{
        const elem = e.target;
        elem.style.display = "none";
        console.log(e)
    }

  return (
        <div className="preloader" onClick={(e)=> preloaderHandler(e)}>
            <div className="preloader-spinner">
                <div className="display-table">
                    <div className="display-table-cell">
                        <img src="/img/preloader.svg" alt="Raju Ahammad" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Preloader;