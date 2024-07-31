import { BsBookmarkHeartFill } from "react-icons/bs";
import { useFavorites } from "../../hooks/useFavorites.ts";
import cl from "./HeaderMain.module.css"

const HeaderMain = () => {
    const { favorites } = useFavorites()

    return (
        <section className={cl["headerMain"]}>

            <div className={cl["headerMain-favorite"]}>
                <BsBookmarkHeartFill fontSize="2rem"/>
                <span className={cl["headerMain-favorite__count"]}>{favorites.length}</span>
            </div>
            
        </section>
    )
}

export default HeaderMain