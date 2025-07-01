export class Storage {

 setItemWithExpiration<T>(key: string, value:T , ttlMs: number):void{
    const item= {
        value,
        expiry: Date.now() + ttlMs,
    }

    localStorage.setItem(key, JSON.stringify(item))
 }

 getItemWithExpiration<T>(key: string): T | null{
    const itemStr = localStorage.getItem(key)
    if(!itemStr) return null 

    try{
        const item = JSON.parse(itemStr)
        if(Date.now() > item.expiry){
            localStorage.removeItem(key)
            return null
        }

        return item.value as T
    }catch(error){
        console.log("new error reference", error);
        return null
    }
 }

 removeItem(key: string): void{
    localStorage.removeItem(key)
 }

 clear(): void{
    localStorage.clear()
 }


}