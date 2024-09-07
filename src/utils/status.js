

// object.freeze nesneyi dondurur nesne içindeki alanları değiştiremem
export const STATUS = Object.freeze ( {
    IDLE: "IDLE", // işlem bekleme durumunda işlem herhangi bir sonuç göstermiyor 
    LOADING : "LOADING",
    SUCCESS : "SUCCESS",
    FAIL: "FAIL"
})