export function DebounceTextSearch (func: any, delay: number) {
    console.log("🚀 ~ file: debounce.ts:2 ~ DebounceTextSearch ~ delay:", delay)
    let timeoutId : any
    
    return function(...arg: any) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            func.apply(this, arg)
        }, delay);
    }

}
