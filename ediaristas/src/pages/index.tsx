import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
     
      <PageTitle 
      title={'Conheça os profissionais'}
      subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <UserInformation 
        name={'Keven Allan'}
        picture={'https://github.com/kevenallan.png'}
        rating={1}
        description={'João Pessoa'}
      />

      <UserInformation 
        name={'Bruna Luiza'}
        picture={'https://github.com/imbruh.png'}
        rating={5}
        description={'João Pessoa'}
      />
    </div>
  );
}
