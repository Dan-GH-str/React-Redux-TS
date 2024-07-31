import './App.css'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import HeaderMain from './components/HeaderMain/HeaderMain'
import RecipeItem from './components/RecipeItem/RecipeItem'
import { useGetRecipeQuery } from './store/api/api'

function App() {
  const { isLoading, data } = useGetRecipeQuery(null)

  console.log(data);

  return (
    <main>
      <HeaderMain />

      <CreateRecipe />

      {isLoading ? 
        <h1>Loading...</h1> 
        : 
        data ? 
        data.map(recipe =>
          <RecipeItem recipe={recipe} key={recipe.id}/>
        ) 
        : 
        <h1>Not found</h1>
      }

    </main>
  )
}

export default App
