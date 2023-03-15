import {api} from "./api"

export class StatisticsService {

    getCountProjectsCompleted() {

       return api.get("http://localhost:9000/api/v1/statistics/projects_completed")

    }

    getCountProfessionals() {

        return api.get("http://localhost:9000/api/v1/statistics/professionals_teams")

    }

    getCountYearsExperience() {

        return api.get("http://localhost:9000/api/v1/statistics/years_experience")

    }


}