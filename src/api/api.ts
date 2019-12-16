

export const registerNewCar = (regNumber: string, salesDateTimestamp: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500)
    })
    // todo : the actual blockchain call
}

export const approveCarService = (regNumber: string, serviceDate: number, approvalId: string) => {
    // todo
}