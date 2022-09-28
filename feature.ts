export default () => {
    return  {  
        name:  'feature' ,
        state: {
            foo:  'bar'
        },
        reducers: {
            setFoo(state, payload) {
                return  { ...state, foo: payload }
            }
        },
    }
}