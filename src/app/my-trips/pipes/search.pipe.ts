import { Pipe, PipeTransform } from "@angular/core";
import { Trip } from "../models/trip";

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {
    transform(trips: Trip[], searchValue: string) {
        return trips.filter( trip => {
            return (trip.name?.toLowerCase().includes(searchValue.toLowerCase()) || trip.region?.toLowerCase().includes(searchValue.toLowerCase()))
        })
    }

}