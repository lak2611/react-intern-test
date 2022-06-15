export const getViewportWidth = () => {
     return document.documentElement.clientWidth
};
export const getVideoWidth = () => { 
     return Math.min(360,getViewportWidth()-48)
 }