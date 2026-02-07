import { getRouteById, getSchedulesByRoute, formatOperatingMonths } from '../../models/model.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.schedules = await getSchedulesByRoute(routeId);
    const formattedMonths = formatOperatingMonths(details.operatingMonths);


    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', { 
        title: 'Route Details',
        details,
        formattedMonths
    });
};