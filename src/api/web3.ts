import Web3 from 'web3';

const myWindow = (window as any);

const getWeb3 =  () =>
    new Promise(async (resolve, reject) => {
            console.log("inside listener")
            // Modern dapp browsers...
            if (myWindow.ethereum) {
                const web3 = new Web3(myWindow.ethereum);
                try {
                    // Request account access if needed
                    await myWindow.ethereum.enable();
                    // Acccounts now exposed
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            }
            // Legacy dapp browsers...
            else if (myWindow.web3) {
                // Use Mist/MetaMask's provider.
                const web3 = myWindow.web3;
                console.log("Injected web3 detected.");
                resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
                const provider = new Web3.providers.HttpProvider(
                    "http://127.0.0.1:7545"
                );
                const web3 = new Web3(provider);
                console.log("No web3 instance injected, using Local web3.");
                resolve(web3);
            }

    });

export default getWeb3;