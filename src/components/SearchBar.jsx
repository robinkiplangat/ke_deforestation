import React from 'react';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';

const suggestions = [
{ label: 'Aberdares'},
{ label: 'Arabuko'},
{ label: 'Boni'},
{ label: 'Gaikuyu'},
{ label: 'Kapcherop'},
{ label: 'Karura'},
{ label: 'Kikuyu Escarpment'},
{ label: 'Kipkunurr'},
{ label: 'Kitalale'},
{ label: 'Loima'},
{ label: 'Lorogi'},
{ label: 'Lugari'},
{ label: 'Lugari and Turbo'},
{ label: 'Maluganji'},
{ label: 'Marenji'},
{ label: 'Marmanet'},
{ label: 'Marsabit'},
{ label: "Mathews Range"},
{ label: 'Mau'},
{ label: 'Menengai'},
{ label: 'Mt. Elgon'},
{ label: 'Mt. Kenya'},
{ label: "Mt. Ngiro"},
{ label: 'Mukogodo'},
{ label: 'Mutito'},
{ label: 'Mutula'},
{ label: 'Namanga'},
{ label: 'Ndoto'},
{ label: 'Ngaya'},
{ label: 'Ngong Hills'},
{ label: 'Ngong Road'},
{ label: 'Ololua'},
{ label: 'Sekhendu'},
{ label: 'Shimba Hills'},
{ label: 'Tinderet'},
{ label: 'Lembus'},
{ label: 'Londiani'},
].map(suggestion => ({
    value: suggestion.label,
    label: suggestion.label,
}));

const useStyles = makeStyles(theme => ({
       input: {
        display: 'flex',
        padding: 0,
        height: 'auto',
        width: '300px',
    },
    chip: {
        margin: theme.spacing(0.5, 0.25),
    },
    chipFocused: {
        backgroundColor: emphasize(
            theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
            0.08,
        ),
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        bottom: 6,
        fontSize: 16,
    },
}));

function Option(props) {
    return (
        <MenuItem
            ref={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

Option.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
};

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

Placeholder.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired,
};

function SearchBar() {
    const classes = useStyles();
    const [single, setSingle] = React.useState(null);

    function handleChangeSingle(value) {
        setSingle(value);
    }
    return (
        <div className={classes.root}>
            <NoSsr>
                <Select
                    options={suggestions}
                    value={single}
                    onChange={handleChangeSingle}
                    placeholder="Search / Type Forest Name To View the Sat Maps"
                />
                <div className={classes.divider} />
            </NoSsr>
        </div>
    );
}

export default SearchBar;
