import {Button, ButtonProps, styled} from "@mui/material";
import {blue, purple} from "@mui/material/colors";

export const StyleButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,

    border: 'none',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#none',
    fontFamily: [

        'Arial',
        'sans-serif',

    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#none',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[300]),
    backgroundColor: blue[800],
    fontSize: 12,
    '&:hover': {
        backgroundColor: purple[700],
    },
}));