export default () => {
    return  {  
        name:  'feature' ,
        state: {
            foo:  'bar',
            abc: 'abc'
        },
        reducers: {
            setFoo(state, payload) {
                return  { ...state, foo: payload }
            }
        },
    }
}