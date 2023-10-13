import {reactive} from "vue";

export const store =reactive ({
  apiUrl: "https://openlibrary.org/search.json?author=",
  authortosearch:"",
  booklist: []
})
