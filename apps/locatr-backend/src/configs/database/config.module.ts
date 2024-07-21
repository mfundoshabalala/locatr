import { Module } from '@nestjs/common';

import { DBConfigService } from './config.service';

@Module({
	imports: [],
	providers: [DBConfigService],
})
export class DBConfigModule {}
