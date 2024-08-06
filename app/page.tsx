import { Container, Title } from '@/components/shared';
import { Categories } from '@/components/shared/categories';


export default function Home() {
  return (
    <>
     <Container className='mt-10'>
      <Title size='lg' text='Все питсы' className='font-extrabold' />
      <Categories />
     </Container>
    </>
  );
}
