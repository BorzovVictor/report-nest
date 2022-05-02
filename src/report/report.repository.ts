import {EntityRepository, MongoRepository} from 'typeorm';
import {Report} from './entities/report.entity';
import {ReportFilterDto} from './dto/report-filter.dto';

@EntityRepository(Report)
export class ReportRepository extends MongoRepository<Report> {
	async getReportByDate(reportFilter: ReportFilterDto): Promise<Report[]> {
		return this.find({
			where: {
				developer: reportFilter.userId,
				'details.month': {$eq: reportFilter.month},
				'details.year': {$eq: reportFilter.year},
			}
		});
	}
}
