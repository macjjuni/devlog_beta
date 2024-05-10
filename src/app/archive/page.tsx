import ArchiveLayout, { ArchiveLayoutSidebar, ArchiveLayoutContent } from '@/app/archive/pageLayout';
import Category from '@/components/sidebar/category/category';
import Profile from '@/components/sidebar/profile/profile';
import Search from '@/components/sidebar/search/search';
import ArchiveList from '@/components/archiveList/archiveList';

export default function ArchivePage() {
  return (
    <ArchiveLayout>
      <ArchiveLayoutSidebar>
        <Profile />
        <Search />
        <Category />
      </ArchiveLayoutSidebar>
      <ArchiveLayoutContent>
        <ArchiveList />
      </ArchiveLayoutContent>
    </ArchiveLayout>
  );
}
