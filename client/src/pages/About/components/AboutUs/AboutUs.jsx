import React from 'react';

const AboutUs = () => {
    return (  
        <div className='w-full'>
            <div className='h-dvh bg-customWhite flex flex-col justify-between relative'>
                <div className="absolute left-0 bottom-0 w-full overflow-hidden transform rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block'>
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-customBlack"></path>
                    </svg>
                </div>
                <p className='text-2xl text-customBlack text-center px-[10%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='w-16 h-16 z-0 text-center text-customBlack rounded-full bg-customWhite'>
                    <p>2</p>
                </div>
            </div>
            <div className='h-dvh bg-customBlack relative flex flex-col justify-between'>
            <div className="absolute left-0 bottom-0 w-full overflow-hidden transform rotate-180">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className='relative block h-[220px]'>
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-customWhite"></path>
                    </svg>
                </div>
                <p className='text-2xl text-customWhite text-center px-[10%]'>
                Orci tortor nunc torquent diam viverra leo mollis velit. Torquent ut donec habitant cubilia hac. Ac bibendum scelerisque praesent pulvinar justo. Scelerisque at elementum primis pellentesque vestibulum non facilisis sed. Ac turpis blandit vitae velit curabitur mus himenaeos posuere curabitur. Lobortis habitant finibus mattis cras inceptos, ipsum enim. Non mi euismod neque gravida congue. Ornare felis tristique nullam semper vitae sollicitudin urna. Adipiscing quis cursus aliquet donec dolor cursus eleifend a dictum. Habitant tincidunt nostra eleifend velit semper; curae tortor maecenas duis.
                </p>
                <div className='w-16 h-16 z-0 text-center text-customWhite rounded-full bg-customOrange'>
                    <p>2</p>
                </div>
            </div>
            <div className='h-dvh bg-customWhite'>
                <p className='text-2xl text-customBlack text-center px-[10%]'>
                Facilisis ac rutrum nulla eros neque pretium. Sollicitudin luctus magnis etiam elit facilisi potenti semper non nec. Est laoreet parturient nam ex tortor cras. Ajusto volutpat phasellus mi ut urna. Laoreet facilisis posuere facilisi; mauris fusce aptent ac. Ornare per lorem fermentum nisi felis senectus orci litora. Phasellus egestas massa placerat auctor neque tellus tempor sem. Eleifend litora maximus, taciti bibendum luctus nunc.
                </p>
            </div>
        </div>
    );
}
 
export default AboutUs;