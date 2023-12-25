import { instance } from "app/api.interceptor";
import { IStatistics } from "types/statistics.interface";

const STATISTICS = 'statistics';
export const StatisticsServer = {
async getStatistics (){
return instance<IStatistics>({
url:`${STATISTICS}/main`,
method: 'GET'
 });
}

}