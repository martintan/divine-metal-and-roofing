/* eslint-disable @next/next/no-img-element */
interface ContentCardImageProps {
  href?: string;
  imgUrl: string;
  alt?: string;
}

function ContentCardImage({ href, imgUrl, alt }: ContentCardImageProps) {
  return (
    <a href={href}>
      <img
        width="1920"
        height="1440"
        src={imgUrl}
        className="vc_single_image-img attachment-full"
        alt={alt}
        loading="lazy"
        sizes="(max-width: 1920px) 100vw, 1920px"
      />
    </a>
  );
}

interface CustomContentCardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  imgUrl: string;
  placeImageRight?: boolean;
  alt?: string;
  href?: string;
}

export default function CustomContentCard({
  title,
  children,
  imgUrl,
  placeImageRight,
  alt,
  href,
  footer,
}: CustomContentCardProps) {
  return (
    <section className="bg-[#E5E5E5] p-8">
      <div data-vc-full-width="true" data-vc-full-width-init="true" className="flex gap-4">
        {!placeImageRight ? (
          <div className="w-1/2">
            <ContentCardImage imgUrl={imgUrl} href={href} />
          </div>
        ) : null}
        <div className="flex flex-col gap-4 w-1/2">
          <h3 className="text-4xl font-bold text-primary">{title}</h3>
          {children}
        </div>
        {placeImageRight ? (
          <div className="w-1/2">
            <ContentCardImage imgUrl={imgUrl} href={href} />
          </div>
        ) : null}
      </div>
      {footer}
    </section>
  );
}
