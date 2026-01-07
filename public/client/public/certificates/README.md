# How to Add Certificate PDFs

Place your PDF certificate files in this directory.

## Example:
- aws-certified-solutions-architect.pdf
- google-cloud-professional.pdf
- react-certification.pdf

Then reference them in your `constants/index.js` file:

```javascript
{
  name: "AWS Certified Solutions Architect",
  issuer: "Amazon Web Services",
  date: "Jan 2023",
  image: "https://...", // Optional badge image
  pdfPath: "/certificates/aws-certified-solutions-architect.pdf"
}
```

The PDF will open in a new tab when users click "View Certificate".
