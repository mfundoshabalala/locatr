import { Module } from '@nestjs/common';

import { ClientEntity } from './client.entity';
import { ContactEntity } from './contact.entity';
import { SiteEntity } from './site.entity';

@Module({
  controllers: [],
  providers: [
    ClientEntity,
    ContactEntity,
    SiteEntity,
  ],
  exports: [
    ClientEntity,
    ContactEntity,
    SiteEntity,
  ],
})
export class InterfacesModule {}
