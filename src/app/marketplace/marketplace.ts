export class Marketplace{
    cropId: string;
    cropName: string;
    farmerName: string;
    basePrice: number;

    constructor(cropId: string, cropName: string, farmerName: string, basePrice: number){
        this.cropId= cropId;
        this.cropName= cropName;
        this.farmerName= farmerName;
        this.basePrice= basePrice;
    }
}