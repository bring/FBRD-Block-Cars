

export const registerNewCar = (regNumber: string, salesDateTimestamp: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500)
    })
    // todo : the actual blockchain call
}