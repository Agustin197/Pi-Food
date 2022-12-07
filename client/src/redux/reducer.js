import {
    BY_DIET,
    BY_SCORE,
    CLEAN_DETAIL,
    CREATE_RECIPE,
    GET_DETAIL,
    GET_DIETS,
    GET_RECIPES,
    GET_RECIPE_TITLE,
    ORDER_AZ
} from "./actions"

const initialState = {
    recipes: [],
    detail: [],
    diets: [],
    filter: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filter: action.payload
            }
        case GET_RECIPE_TITLE:
            return {
                ...state,
                recipes: action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                detail: [],
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload,
            };
        case CREATE_RECIPE:
            return {
                ...state,
            };
        case ORDER_AZ:
            
            let sortedTitle = action.payload === "a-z" ?
                state.recipes.sort((a, b) => {
                    if (a.title > b.title) return 1  
                    if (a.title < b.title) return -1  
                    return 0
                }) :
                state.recipes.sort((b, a) => {
                    if (a.title > b.title) return 1  
                    if (a.title < b.title) return -1  
                    return 0
                })
            return {
                ...state,
                recipes: sortedTitle
            }
        case BY_DIET:
            const allRecipes = state.recipes
            const dietFilter = action.payload === "all" ? allRecipes :
            allRecipes.filter((r) =>
             r.diets.find((r) =>
              r.includes(action.payload))
              )
            return {
                ...state,
                recipes: dietFilter
            }
        case BY_SCORE:
            const sortedScore = action.payload === "high" ?
            state.recipes.sort(function (a, b) {
                return b.healthScore - a.healthScore
            }) :
            state.recipes.sort(function (a, b) {
                return a.healthScore - b.healthScore
            })
            return {
                ...state,
                recipes: sortedScore,
            }
        default:
            return state;
    }
}

export default rootReducer