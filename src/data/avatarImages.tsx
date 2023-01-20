const avatarImages:any = import.meta.glob('/src/assets/images/avatars/*', {eager:true})
const getSrc = ( s: string ) => {
    return avatarImages[`/src/assets/${s.slice(2)}`].default
}
export {avatarImages, getSrc}