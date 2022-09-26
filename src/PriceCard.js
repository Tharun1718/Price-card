import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

// export function PriceCard({details}) {
//   return (
//     <Card className='main-container'>
//       <div className='heading-container'>
//         <p>Free</p>
//         <p>$0/month</p>
//       </div>
//       <div className='content-container'>
//         <p>Single User</p>
//         <p>5GB Storage</p>
//         <p>Unlimited Public Projects</p>
//         <p>Community Access</p>
//         <p>Unlimited Private Projects</p>
//         <p>Dedicated Phone Support</p>
//         <p>Free Subdomain</p>
//         <p>Monthly Status Reports</p>
//         <Button variant="contained">Button</Button>
//       </div>
//     </Card>
//   );
// }

export function PriceCard({details}) {
  return (
    <div className='main-container'>
      <div className='heading-container'>
        <p className='type'>{details.type}</p>
        <p className='price'>{details.price}<span>/month</span></p>
      </div>
      <div className='content-container'>
        <p>{details.usertype}</p>
        <p>{details.storage}</p>
        <p>{details.projects}</p>
        <p>{details.access}</p>
        <p>{details.private}</p>
        <p>{details.support}</p>
        <p>{details.domain}</p>
        <p>{details.reports}</p>
      </div>
      <div className="button-container">
          <Button variant="contained">Button</Button>
      </div>
    </div>
  );
}
